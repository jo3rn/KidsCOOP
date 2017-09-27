from otree.api import (
    models, widgets, BaseConstants, BaseSubsession, BaseGroup, BasePlayer,
    Currency as c, currency_range
)


author = 'Jörn'

doc = """
this is a public good game for kids in elementary school
"""


class Constants(BaseConstants):
    name_in_url = 'pgk'
    players_per_group = 4
    num_rounds = 1

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
            p.payoff = Constants.endowment - p.contribution + self.individual_share


class Player(BasePlayer):
    contribution = models.FloatField()
    p_label = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
