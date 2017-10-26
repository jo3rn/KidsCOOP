from otree.api import Currency as c, currency_range
from . import models
from ._builtin import Page, WaitPage
from .models import Constants


class GroupTreatment(Page):
    # value will be saved in self.player.groupTreatment
    form_model = models.Player
    form_fields = ['groupTreatment']

    def is_displayed(self):
        return self.round_number == 1

    def before_next_page(self):
        self.participant.vars['groupdesign'] = self.player.groupTreatment


class Choose(Page):
    #value will be saved in self.player.animal for later group distinction
    form_model = models.Player
    form_fields = ['animal']

    def is_displayed(self):
        return self.round_number == 1

    def before_next_page(self):
        self.player.set_image()

class ChooseWaitPage(WaitPage):
    template_name = 'PublicGoodKids/CustomWaitPage.html'
    def is_displayed(self):
        return self.round_number == 1


class Instructions(Page):
    def is_displayed(self):
        return self.round_number == 1

    def vars_for_template(self):
        return {
            'groupdesign'       : self.participant.vars['groupdesign'],
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop'],
            'instructions1a'    : self.participant.vars['instructions1a']
        }

class TestRun(Page):
    def is_displayed(self):
        return self.round_number == 1

    def vars_for_template(self):
        return {
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

class Understood(Page):
    form_model = models.Player
    form_fields = ['understood']

    def is_displayed(self):
        return self.round_number == 1

class NotUnderstood(Page):
    def is_displayed(self):
        return (self.round_number == 1 and self.player.understood == "no")

class Contribute(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def is_displayed(self):
        return self.round_number < 4

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'PublicGoods',
            'roundnumber'       : self.round_number,
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

class UKStrategy(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'UKStrategy',
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

    def is_displayed(self):
        return self.round_number == 4

class K0Strategy(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'K0Strategy',
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

    def is_displayed(self):
        return self.round_number == 5

class K1Strategy(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'K1Strategy',
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

    def is_displayed(self):
        return self.round_number == 6

class K2Strategy(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'K2Strategy',
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

    def is_displayed(self):
        return self.round_number == 7

class K3Strategy(Page):
    form_model = models.Player
    form_fields = ['contribution', 'p_label', 'gameTreatment', 'groupTreatment']

    def vars_for_template(self):
        return {
            'groupTreatment'    : self.participant.vars['groupdesign'],
            'gameTreatment'     : 'K3Strategy',
            'p_label'           : self.participant.label,
            'imagepathleft'     : self.participant.vars['imagepathleft'],
            'imagepathbottom'   : self.participant.vars['imagepathbottom'],
            'imagepathright'    : self.participant.vars['imagepathright'],
            'imagepathtop'      : self.participant.vars['imagepathtop']
        }

    def is_displayed(self):
        return self.round_number == 8




class ResultsWaitPage(WaitPage):

    def after_all_players_arrive(self):
        self.group.set_payoffs()

    template_name = 'PublicGoodKids/CustomWaitPage.html'
    body_text = 'boom'


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
    GroupTreatment,
    #ChooseWaitPage,
    Choose,
    #ChooseWaitPage,
    #Instructions,
    #TestRun,
    Understood,
    NotUnderstood,
    #ChooseWaitPage,
    Contribute,
    UKStrategy,
    K0Strategy,
    #ResultsWaitPage,
    #Results
]
