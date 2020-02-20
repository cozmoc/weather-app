#!/bin/sh
if which node > /dev/null
then
    if which yarn > /dev/null
    then
        echo "yarn is installed"
    else
        # install yarn
        echo "yarn is not installed. installing globally"
        sudo npm i -g yarn
    fi

else
    # install node
    echo "node is not installed. installing latest version"
    curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
    sudo npm i -g yarn
fi

yarn 
cp .env-sample .env
yarn start
