# Install the Piral CLI
npm i piral-cli -g

# Check version of the Piral CLI
piral --version

# Scaffold an application shell
piral new --target my-app

In case you don't want to install the Piral CLI globally, you can also leverage the npm initializer for this command.

npm init piral-instance --target my-app --defaults
The npm initializer comes with a quick survey going over the options. Specifying --defaults will take the default values.

# Start the Piral instance in debug mode
npx piral debug

# Create an npm package for the app shell
npx piral build

The previously used command builds both, release and emulator. If you only want, e.g., the emulator package you can use the --type flag:

npx piral build --type emulator

# CREATE PILET
# Scaffold a new pilet with the name 'my-pilet' for the app shell 'my-app'
# For the path to the tgz we assume the following path, make sure to adapt it to your directory structure
pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet



You can also leverage the npm initializers for creating new pilets.
npm init pilet --target my-pilet --source ./my-app/dist/emulator/my-app-1.0.0.tgz --defaults

Also here, if you drop the --defaults option additional settings will be presented to you in form of a quick survey.

# Start a Pilet in debug mode
npx pilet debug