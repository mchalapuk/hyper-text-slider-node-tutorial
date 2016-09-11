# Initialize the project, if you haven't done that already.
npm init

# Get the goodies
npm install gulp --save-dev
npm install gulp-util --save-dev
npm install browserify --save-dev
npm install vinyl-source-stream --save-dev
npm install gulp-sass --save-dev
npm install hermes-slider --save-dev
npm install del --save-dev
# Create project folders.
mkdir -p src dist/images

# Download image files
cd dist/images
wget https://webfront-toolkit.github.io/hermes-node-example/dist/images/big-ben.jpg
wget https://webfront-toolkit.github.io/hermes-node-example/dist/images/css-on-macbook-pro.jpg
wget https://webfront-toolkit.github.io/hermes-node-example/dist/images/keyboard.jpg
cd -
