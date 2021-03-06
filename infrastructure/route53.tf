resource "aws_route53_record" "website_route53_record_2" {
  zone_id = data.aws_route53_zone.default_route53_zone.zone_id
  name    = "algorithms.ofadiman.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.website_cloudfront_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_cloudfront_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
resource "aws_route53_record" "website_route53_record" {
  for_each = {
    for dvo in aws_acm_certificate.website_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.default_route53_zone.zone_id
}
