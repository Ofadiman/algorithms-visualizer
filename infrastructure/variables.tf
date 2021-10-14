variable "stage" {
  description = "Current stage"
  type        = string

  validation {
    condition     = can(regex("^(development|staging|production)$", var.stage))
    error_message = "The \"stage\" value must be one of the following: \"development\", \"staging\" or \"production\"."
  }
}

variable "project_name" {
  description = "Unique project name."
  type        = string
}

variable "aws_region" {
  default     = "eu-west-1"
  description = "AWS region name where all resources are created."
  type        = string
}
