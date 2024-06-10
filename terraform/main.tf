provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "repo" {
  name = "n5-repo"
}
