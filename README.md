# PublicGoodKids
An [oTree application](https://otree.readthedocs.io/) for a 4-player public goods game to be played in a browser.
The player is firstly audio-instructed and then proceeds through the app by touchscreen or mouse interaction.

The public goods game is a standard of experimental economics - [read more on Wikipedia](https://en.wikipedia.org/wiki/Public_goods_game).

# Installation
To use this Django application you need to install oTree, which is a software platform for economics experiments.
- [official oTree Homepage](http://www.otree.org)
- [Installation Guidelines](https://otree.readthedocs.io/en/latest/install.html)
- [oTree on GitHub](https://github.com/oTree-org) (just for the curious)

If you have Python 3 already installed, you only need to run `pip3 install -U otree` in a terminal.

# Start the application

Clone or download this repository to your device. Jump inside the directory and open a terminal window (e.g. PowerShell on Windows). Enter `otree runserver`.
Open your browser and enter http://127.0.0.1:8000 in the address bar. You will have access to invitation links for participants in the same network.

Remark: While this works for a small number of concurrent participants in a local network, you might want to consider hosting the application on a server. Read the [corresponding chapter in the oTree documentation](https://otree.readthedocs.io/en/latest/server/intro.html) for further details.
