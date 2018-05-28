# create this file
# rerouting all requests that have ‘api’ in the url to the <code>apps.core.urls

from django.conf.urls import url
from rest_framework import routers
from adult.adultdata.views import AdultViewSet, AdultMaleViewSet, AdultFemaleViewSet, AdultWifeViewSet, AdultHusbandViewSet, AdultOwnChildViewSet, AdultUnmarriedViewSet, AdultNotInFamilyViewSet, AdultOtherRelativeViewSet

router = routers.DefaultRouter()
router.register(r'adults', AdultViewSet)
router.register(r'malecount', AdultMaleViewSet)
router.register(r'femalecount', AdultFemaleViewSet)
router.register(r'wifecount', AdultWifeViewSet)
router.register(r'husbandcount', AdultHusbandViewSet)
router.register(r'ownchildcount', AdultOwnChildViewSet)
router.register(r'unmarriedcount', AdultUnmarriedViewSet)
router.register(r'notinfamilycount', AdultNotInFamilyViewSet)
router.register(r'otherelativecount', AdultOtherRelativeViewSet)


urlpatterns = router.urls
