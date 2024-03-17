# ------------------------ Dockerfile --------------------------------------------


# up: ## Build the Docker image and run the container
# 	docker build -t portfolio-3d .
# 	docker run -d -p 3000:3000 --name portfolio portfolio-3d

# down: ## Stop and remove the Docker container and image
# 	docker stop portfolio
# 	docker rm portfolio
# 	docker rmi portfolio-3d



# ------------------------ docker compose file --------------------------------------------

up:
	docker-compose up -d

down:
	docker-compose down