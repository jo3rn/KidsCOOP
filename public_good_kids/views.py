from otree.api import Currency as c, currency_range
from . import models
from ._builtin import Page, WaitPage
from .models import Constants


class GroupTreatment(Page):
    # value will be saved in self.group.groupTreatment
    form_model = models.Group
    form_fields = ['groupTreatment']

    def is_displayed(self):
        return (self.round_number == 1 and self.player.id_in_group == 1)

    def before_next_page(self):
        for p in self.group.get_players():
            p.participant.vars['groupdesign'] = p.group.groupTreatment



class PlayerID(Page):
    # value will be saved in self.player.playerID
    form_model = models.Player
    form_fields = ['playerID']

    def is_displayed(self):
        return self.round_number == 1

    def before_next_page(self):
        self.participant.vars['playerID'] = self.player.playerID


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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
    form_fields = ['contribution', 'p_label', 'gameTreatment']

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
        if self.round_number < 5:
            self.group.set_payoffs()

    template_name = 'PublicGoodKids/CustomWaitPage.html'
    body_text = 'boom'


class Results(Page):
    def is_displayed(self):
        return self.round_number < 5

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

class ResultsStrategy(Page):
    def is_displayed(self):
        return self.round_number > 4

    def vars_for_template(self):
        bottomclass = ''
        if self.player.contribution == 0:
            bottomclass = 'owncoin'
            bottom = '80%'
        elif self.player.contribution == 5:
            bottomclass = 'maincoin'
            bottom = '61%'

        if self.round_number == 5:
            # all ego
            otherchipin = 0
            # attributes: top, 5xleft, class
            left = ['55%', '18.5%', '14.5%', '10.5%', '6.5%', '2.5%', '']
            top = ['17%', '56%', '52%', '48%', '44%', '40%', '']
            right = ['55%', '93.5%', '89.5%', '85.5%', '81.5%', '77.5%', '']
        elif self.round_number == 6:
            # left coop
            otherchipin = 5
            left = ['54%', '56%', '52%', '48%', '44%', '40%', 'maincoin']
            top = ['17%', '56%', '52%', '48%', '44%', '40%', '']
            right = ['55%', '93.5%', '89.5%', '85.5%', '81.5%', '77.5%', '']
        elif self.round_number == 7:
            # left and top coop
            otherchipin = 10
            left = ['54%', '56%', '52%', '48%', '44%', '40%', 'maincoin']
            top = ['47%', '56%', '52%', '48%', '44%', '40%', 'maincoin']
            right = ['55%', '93.5%', '89.5%', '85.5%', '81.5%', '77.5%', '']
        elif self.round_number == 8:
            # all coop
            otherchipin = 15
            left = ['54%', '56%', '52%', '48%', '44%', '40%', 'maincoin']
            top = ['47%', '56%', '52%', '48%', '44%', '40%', 'maincoin']
            right = ['39%', '56%', '52%', '48%', '44%', '40%', 'maincoin']

        return {
            'bottomclass'   : bottomclass,
            'bottomtop'     : bottom,
            'lefttop'       : left[0],
            'left1'         : left[1],
            'left2'         : left[2],
            'left3'         : left[3],
            'left4'         : left[4],
            'left5'         : left[5],
            'leftclass'     : left[6],
            'toptop'        : top[0],
            'top1'          : top[1],
            'top2'          : top[2],
            'top3'          : top[3],
            'top4'          : top[4],
            'top5'          : top[5],
            'topclass'      : top[6],
            'righttop'      : right[0],
            'right1'        : right[1],
            'right2'        : right[2],
            'right3'        : right[3],
            'right4'        : right[4],
            'right5'        : right[5],
            'rightclass'    : right[6],
            'contribution'  : self.player.contribution,
            'otherchipin'   : otherchipin
        }

page_sequence = [
    GroupTreatment,
    #ChooseWaitPage,
    #PlayerID,
    #ChooseWaitPage,
    Choose,
    #ChooseWaitPage,
    #Instructions,
    #TestRun,
    #Understood,
    #NotUnderstood,
    #ChooseWaitPage,
    Contribute,
    UKStrategy,
    K0Strategy,
    K1Strategy,
    K2Strategy,
    K3Strategy,
    ResultsWaitPage,
    Results,
    ResultsStrategy
]
