Write-Host "Building Lambda package..."

docker run --rm `
-v "${PWD}:/var/task" `
-w /var/task `
--entrypoint /bin/bash `
public.ecr.aws/lambda/python:3.12 `
-c "
python -m pip install --upgrade pip &&
python -m pip install -r requirements.txt -t build &&
cp -r app build &&
cp lambda_handler.py build
"

Write-Host "Build completed."