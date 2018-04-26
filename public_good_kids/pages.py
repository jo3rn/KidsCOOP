from otree.api import Currency as c, currency_range
from . import models
from ._builtin import Page, WaitPage
from .models import Constants


class GenderAndID(Page):
    # value will be saved in self.player.playerID
    form_model = 'player'
    form_fields = ['playerID', 'gender']

    def is_displayed(self):
        return self.round_number == 1

    def before_next_page(self):
        self.participant.vars['playerID'] = self.player.playerID
        self.participant.vars['gender'] = self.player.gender


class ChooseWaitPage(WaitPage):
    template_name = 'public_good_kids/CustomWaitPage.html'
    def is_displayed(self):
        return self.round_number == 1


class Instructions(Page):
    def is_displayed(self):
        return self.round_number == 1


class TestRun(Page):
    def is_displayed(self):
        return self.round_number == 1


class Understood(Page):
    form_model = 'player'
    form_fields = ['understood']

    def is_displayed(self):
        return self.round_number == 1

class NotUnderstood(Page):
    def is_displayed(self):
        return (self.round_number == 1 and self.player.understood == "no")


class ClassicPublicGood(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def is_displayed(self):
        return self.round_number < 4

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'PublicGoods_' + str(self.round_number),
            'roundnumber'       : self.round_number,
            'partLabel'         : self.participant.label,
        }


class UKStrategy(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'UKStrategy',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 4


class K0Strategy(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'K0Strategy',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 5

    def before_next_page(self):
        self.player.set_payoffs_generic()


class K1Strategy(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'K1Strategy',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 6

    def before_next_page(self):
        self.player.set_payoffs_generic()


class K2Strategy(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'K2Strategy',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 7

    def before_next_page(self):
        self.player.set_payoffs_generic()


class K3Strategy(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'K3Strategy',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 8

    def before_next_page(self):
        self.player.set_payoffs_generic()
        self.player.set_final_payoff()


class ThirdPartyPunishment(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'TPP',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 9


class Dictator(Page):
    form_model = 'player'
    form_fields = ['contribution', 'distPattern', 'gameTreatment', 'partLabel']

    def vars_for_template(self):
        return {
            'gameTreatment'     : 'Dictator',
            'partLabel'         : self.participant.label,
        }

    def is_displayed(self):
        return self.round_number == 10


class ResultsWaitPage(WaitPage):
    def is_displayed(self):
        return self.round_number < 5

    def after_all_players_arrive(self):
        if self.round_number < 5:
            self.group.set_payoffs()
        else:
            self.group.set_payoffs_generic()

    template_name = 'public_good_kids/CustomWaitPage.html'
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
            'otherchipin'   : sum([p.contribution for p in self.group.get_players()]) - self.player.contribution,
        }


class Disbursement(Page):
    form_model = 'player'
    form_fields = ['finalPay', 'payround']

    def is_displayed(self):
        return self.round_number == 10

    def vars_for_template(self):
        return {
            'finalpay'  : int(self.participant.vars['finalpay']),
            'payround'  : self.participant.vars['payround']
    }


page_sequence = [
    # GenderAndID,
    # ChooseWaitPage,
    # Instructions,
    # TestRun,
    # Understood,
    # NotUnderstood,
    # ChooseWaitPage,
    # ClassicPublicGood,
    # UKStrategy,
    # K0Strategy,
    # K1Strategy,
    # K2Strategy,
    # K3Strategy,
    # ThirdPartyPunishment,
    Dictator,
    # ResultsWaitPage,
    # Results,
    # Disbursement
]
