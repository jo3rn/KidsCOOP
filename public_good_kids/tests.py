from otree.api import Currency as c, currency_range
from . import pages
from ._builtin import Bot
from .models import Constants


class PlayerBot(Bot):

    def play_round(self):
        yield (pages.ClassicPublicGood, {'contribution': 5, 'gameTreatment' : 'testCPG', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Results)
        yield (pages.ClassicPublicGood, {'contribution': 5, 'gameTreatment' : 'testCPG', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Results)
        yield (pages.ClassicPublicGood, {'contribution': 5, 'gameTreatment' : 'testCPG', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Results)
        yield (pages.UKStrategy, {'contribution': 5, 'gameTreatment': 'testUK', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Results)
        yield (pages.K0Strategy, {'contribution': 5, 'gameTreatment': 'testK0', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.K1Strategy, {'contribution': 5, 'gameTreatment': 'testK1', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.K2Strategy, {'contribution': 5, 'gameTreatment': 'testK2', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.K3Strategy, {'contribution': 5, 'gameTreatment': 'testK3', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Dictator, {'contribution': 24, 'gameTreatment': 'testDic', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        assert self.participant.vars['dictator_share'] == 2
        assert self.participant.vars['dictator_gift'] == 4
        yield (pages.Disbursement, {'finalPay': int(self.participant.vars['finalpay']), 'payround': self.participant.vars['payround']})
