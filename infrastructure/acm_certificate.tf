resource "aws_acm_certificate" "website_certificate" {
  provider          = aws.us_east_1
  domain_name       = "algorithms.ofadiman.com"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "website_acm_certificate_validation" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.website_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.website_route53_record : record.fqdn]
}
