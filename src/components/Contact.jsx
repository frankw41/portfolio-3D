import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const WARNING = {
  NAME: "name",
  EMAIL: "email",
  MESSAGE: "message",
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (warning === name) {
      setWarning("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name) {
      setWarning(WARNING.NAME);
      setLoading(false);
      return;
    }
    if (!form.email) {
      setWarning(WARNING.EMAIL);
      setLoading(false);
      return;
    }
    if (!form.message) {
      setWarning(WARNING.MESSAGE);
      setLoading(false);
      return;
    }
    setWarning("");
    emailjs
      .send(
        "service_p3p75sn",
        "template_df6lkz5",
        {
          from_name: form.name,
          to_name: "Frank",
          from_email: form.email,
          to_email: "frankwan41@gmail.com",
          message: form.message,
        },
        "hQdLNRtrg1xxrrYuq"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get to you ass soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wront");
        }
      );
  };

  // hQdLNRtrg1xxrrYuq
  // template_df6lkz5
  // service_p3p75sn

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] dark:bg-black-100 bg-white p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <h2 className={`text-red-500 mt-6 ${warning === "" ? "hidden" : ""}`}>
          {`Please enter your ${warning}!`}
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="dark:text-white text-black font-medium mb-4">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="dark:bg-tertiary bg-light_tertiary py-4 px-6 placeholder:dark:text-secondary placeholder:text-light_secondary dark:text-white text-black rounded-lg dark:outline-none outline border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="dark:bg-tertiary bg-light_tertiary py-4 px-6 placeholder:dark:text-secondary placeholder:text-light_secondary dark:text-white text-black rounded-lg dark:outline-none outline border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="dark:text-white text-black font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="dark:bg-tertiary bg-light_tertiary py-4 px-6 placeholder:dark:text-secondary placeholder:text-light_secondary rounded-lg dark:outline-none outline dark:border-none border border-black font-medium"
            />
          </label>
          <button
            disabled={loading}
            type="submit"
            className="dark:bg-tertiary bg-light_tertiary py-3 px-8 outline-none w-fit dark:text-white text-black font-bold dark:shadow-md border border-black shadow-primary rounded-xl hover:dark:bg-white hover:bg-[#4d4d4d] hover:dark:bg-opacity-20 hover:bg-opacity-20"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactPage = SectionWrapper(Contact, "contact");
export default ContactPage;
