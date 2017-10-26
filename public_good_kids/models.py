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
    num_rounds = 8

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

    groupTreatment = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    gameTreatment = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    contribution = models.FloatField()
    animal = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    understood = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
    p_label = models.CharField(widget=widgets.HiddenInput(), verbose_name='')
