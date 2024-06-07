provider "aws" {
  region = "us-east-2"
}

resource "aws_ecr_repository" "repo" {
  name = "n5-repo"
}
