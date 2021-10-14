resource "aws_cloudfront_origin_access_identity" "website_cloudfront_origin_access_identity" {
  comment = "Cloud Front Origin Access Identity for Algorithms Visualizer project."
}

resource "aws_cloudfront_distribution" "website_cloudfront_distribution" {
  depends_on = [
    aws_acm_certificate.website_certificate,
    aws_cloudfront_origin_access_identity.website_cloudfront_origin_access_identity,
    aws_s3_bucket.website_bucket
  ]

  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.website_bucket.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.website_cloudfront_origin_access_identity.cloudfront_access_identity_path
    }
  }

  aliases             = ["algorithms.ofadiman.com"]
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Cloud Front Distribution for Algorithms Visualizer project."
  default_root_object = "index.html"

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.website_bucket.bucket_regional_domain_name

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.website_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
