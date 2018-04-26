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
    num_rounds = 10

    endowment = 5
    multiplier = 2


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    total_contribution = models.FloatField()
    individual_share = models.FloatField()


    def set_payoffs(self):
        self.total_contribution = sum([p.contribution for p in self.get_players()])
        self.individual_share = self.total_contribution * Constants.multiplier / Constants.players_per_group
        for p in self.get_players():
            p.payoff = 2 * (Constants.endowment - p.contribution + self.individual_share)

class Player(BasePlayer):
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

    # number of coins put into the mainpot
    contribution = models.FloatField()
    # record of clicking the up (u) and down (d) arrows
    distPattern = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
    # number of coins payed out at the end
    finalPay = models.FloatField(widget=widgets.HiddenInput(), verbose_name='')
    # which treatement of the game is played
    gameTreatment = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
    # gender of the participant
    gender = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
    # unique identifier
    partLabel = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
    # number of round decided for the final payment
    payround = models.FloatField(widget=widgets.HiddenInput(), verbose_name='')
    # ID (number) given to the player at start
    playerID = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
    # yes/no whether the player understood the instructions
    understood = models.StringField(widget=widgets.HiddenInput(), verbose_name='')
