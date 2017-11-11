from otree.api import (
    models, widgets, BaseConstants, BaseSubsession, BaseGroup, BasePlayer,
    Currency as c, currency_range
)

import random


author = 'Jörn'

doc = """
this is a public good game for kids in elementary school
"""


class Constants(BaseConstants):
    name_in_url = 'pgk'
    players_per_group = 4
    num_rounds = 8

    endowment = 5
    multiplier = 2


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    total_contribution = models.FloatField()
    individual_share = models.FloatField()
    groupTreatment = models.CharField(widget=widgets.HiddenInput(), verbose_name='')

    def set_payoffs(self):
        self.total_contribution = sum([p.contribution for p in self.get_players()])
        self.individual_share = self.total_contribution * Constants.multiplier / Constants.players_per_group
        for p in self.get_players():
            p.payoff = 2 * (Constants.endowment - p.contribution + self.individual_share)

class Player(BasePlayer):

    def set_image(self):

        if self.animal == "Elefant" and self.participant.vars['groupdesign'] == 'in':
            self.participant.vars['imagepathbottom'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathleft'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathtop'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathright'] = 'public_good_kids/elephant.png'
            self.participant.vars['instructions1a'] = '../../../../../static/public_good_kids/Instruktion1a_ElefantIngroup_v1.mp3'
        elif self.animal == "Schildkröte" and self.participant.vars['groupdesign'] == 'in':
            self.participant.vars['imagepathbottom'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathleft'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathtop'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathright'] = 'public_good_kids/turtle.png'
            self.participant.vars['instructions1a'] = '../../../../../static/public_good_kids/Instruktion1a_SchildIngroup_v1.mp3'
        elif self.animal == "Elefant" and self.participant.vars['groupdesign'] == 'out':
            self.participant.vars['imagepathbottom'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathleft'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathtop'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathright'] = 'public_good_kids/turtle.png'
            self.participant.vars['instructions1a'] = '../../../../../static/public_good_kids/Instruktion1a_ElefantOutgroup_v1.mp3'
        elif self.animal == "Schildkröte" and self.participant.vars['groupdesign'] == 'out':
            self.participant.vars['imagepathbottom'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathleft'] = 'public_good_kids/elephant.png'
            self.participant.vars['imagepathtop'] = 'public_good_kids/turtle.png'
            self.participant.vars['imagepathright'] = 'public_good_kids/elephant.png'
            self.participant.vars['instructions1a'] = '../../../../../static/public_good_kids/Instruktion1a_SchildOutgroup_v1.mp3'

    def set_payoffs_generic(self):
        if self.round_number == 5:
            self.payoff = 2 * (Constants.endowment - self.contribution + Constants.multiplier * self.contribution / Constants.players_per_group)
        elif self.round_number == 6:
            self.payoff = 2 * (Constants.endowment - self.contribution + Constants.multiplier * (self.contribution + 5) / Constants.players_per_group)
        elif self.round_number == 7:
            self.payoff = 2 * (Constants.endowment - self.contribution + Constants.multiplier * (self.contribution + 10) / Constants.players_per_group)
        elif self.round_number == 8:
            self.payoff = 2 * (Constants.endowment - self.contribution + Constants.multiplier * (self.contribution + 15) / Constants.players_per_group)

    def set_final_payoff(self):
        pay_round = random.choice(list(range(0, 8)))
        self.participant.vars['finalpay'] = [p.payoff for p in self.in_all_rounds()][pay_round]
        self.participant.vars['payround'] = pay_round + 1


    playerID = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    gameTreatment = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    contribution = models.FloatField()
    animal = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    understood = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    p_label = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    final_pay = models.FloatField(widget=widgets.HiddenInput(), verbose_name='')
    payround = models.FloatField(widget=widgets.HiddenInput(), verbose_name='')
