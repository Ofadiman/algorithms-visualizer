data "aws_route53_zone" "default_route53_zone" {
  name         = "ofadiman.com"
  private_zone = false
}
