aws_vault_account="ofadiman"
project_name="algorithms-visualizer"
stage="staging"

plan:
	@aws-vault exec ${aws_vault_account} -- terraform plan -var="stage=${stage}" -var="project_name=${project_name}"

apply:
	@aws-vault exec ${aws_vault_account} -- terraform apply -var="stage=${stage}" -var="project_name=${project_name}"

destroy:
	@aws-vault exec ${aws_vault_account} -- terraform destroy -var="stage=${stage}" -var="project_name=${project_name}"

init:
	@aws-vault exec ${aws_vault_account} -- terraform init -var="stage=${stage}" -var="project_name=${project_name}"

validate:
	@terraform validate

format:
	@terraform fmt

sync:
	@aws-vault exec ${aws_vault_account} -- aws s3 sync ../build/ s3://algorithms.ofadiman.com
