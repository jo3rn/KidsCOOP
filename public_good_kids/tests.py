from otree.api import Currency as c, currency_range
from otree.api import Submission
from . import pages
from ._builtin import Bot
from .models import Constants


class PlayerBot(Bot):

    def play_round(self):
        yield (pages.GenderAndID, {'playerID': self.player.id_in_group, 'gender': 'xx'})
        yield (pages.Instructions)
        yield (pages.TestRun)
        yield (pages.Understood, {'understood': 'y'})
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
        yield (pages.ThirdPartyPunishment, {'contribution': 123, 'gameTreatment': 'testTPP', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        yield (pages.Dictator, {'contribution': 24, 'gameTreatment': 'testDic', 'distPattern': 'testDist', 'partLabel': 'testLabel'})
        assert self.participant.vars['dictator_share'] == 2
        assert self.participant.vars['dictator_gift'] == 4
        yield Submission(pages.Disbursement, check_html=False)
