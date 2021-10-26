terraform {
  backend "remote" {
    organization = "Ofadiman"

    workspaces {
      name = "algorithms-visualizer"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region  = var.aws_region
  profile = "default"

  default_tags {
    tags = {
      Environment = var.stage
      Owner       = "ofadiman"
      Project     = var.project_name
      Terraform   = "true"
    }
  }
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
