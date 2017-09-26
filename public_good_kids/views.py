from otree.api import Currency as c, currency_range
from . import models
from ._builtin import Page, WaitPage
from .models import Constants


class Instructions(Page):
    pass

class Contribute(Page):
    form_model = models.Player
    form_fields = ['contribution']

class ResultsWaitPage(WaitPage):

    def after_all_players_arrive(self):
        self.group.set_payoffs()


class Results(Page):
    def vars_for_template(self):
        if self.player.contribution == 0:
            coinclass = ['owncoin', 'owncoin', 'owncoin', 'owncoin', 'owncoin']
            styletop = ['80%', '80%', '80%', '80%', '80%']
        elif self.player.contribution == 1:
            coinclass = ['owncoin', 'owncoin', 'owncoin', 'owncoin', 'maincoin']
            styletop = ['80%', '80%', '80%', '80%', '61%']
        elif self.player.contribution == 2:
            coinclass = ['owncoin', 'owncoin', 'owncoin', 'maincoin', 'maincoin']
            styletop = ['80%', '80%', '80%', '61%', '61%']
        elif self.player.contribution == 3:
            coinclass = ['owncoin', 'owncoin', 'maincoin', 'maincoin', 'maincoin']
            styletop = ['80%', '80%', '61%', '61%', '61%']
        elif self.player.contribution == 4:
            coinclass = ['owncoin', 'maincoin', 'maincoin', 'maincoin', 'maincoin']
            styletop = ['80%', '61%', '61%', '61%', '61%']
        elif self.player.contribution == 5:
            coinclass = ['maincoin', 'maincoin', 'maincoin', 'maincoin', 'maincoin']
            styletop = ['61%', '61%', '61%', '61%', '61%']

        return {
            'class1'        : coinclass[0],
            'class2'        : coinclass[1],
            'class3'        : coinclass[2],
            'class4'        : coinclass[3],
            'class5'        : coinclass[4],
            'top1'          : styletop[0],
            'top2'          : styletop[1],
            'top3'          : styletop[2],
            'top4'          : styletop[3],
            'top5'          : styletop[4],
            'contribution'  : self.player.contribution,
            'otherchipin'   : sum([p.contribution for p in self.group.get_players()]) - self.player.contribution
        }


page_sequence = [
    Instructions,
    Contribute,
    ResultsWaitPage,
    Results
]
