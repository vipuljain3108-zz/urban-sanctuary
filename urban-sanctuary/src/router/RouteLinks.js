import Register  from '../views/Register/Register';
import Home  from '../views/Home/Home';
import AdvanceExercises  from '../views/AdvanceExercises/AdvanceExercises';
import BookingPlan  from '../views/BookingPlan/BookingPlan';
import FusionExerciseAir  from '../views/FusionExerciseAir/FusionExerciseAir';
import FusionExerciseAirDetail  from '../views/FusionExerciseAirDetail/FusionExerciseAirDetail';
import Home2  from '../views/Home2/Home2';
import StoreSkinAnalysis  from '../views/StoreSkinAnalysis/StoreSkinAnalysis';
import StoreInbodyScanning  from '../views/StoreInbodyScanning/StoreInbodyScanning';
import AboutUs from '../views/About-us';
import TechHairTesting from '../views/Tech-hair-testing';
import HolisticSystem  from '../views/Holistic-system';

export const RouteLinks = {
    Register: {
      component: Register, path: '/',
    },
    Home: {
      component: Home, path: '/home',
    },
    AdvanceExercises: {
      component: AdvanceExercises, path: '/advance-Exercises',
    },
    BookingPlan: {
      component: BookingPlan, path: '/booking-plans',
    },
    FusionExerciseAir: {
      component: FusionExerciseAir, path: '/exercise-air',
    },
    FusionExerciseAirDetail: {
      component: FusionExerciseAirDetail, path: '/exercise-air-detail',
    },
    Home2: {
      component: Home2, path: '/Home2',
    },
    StoreSkinAnalysis: {
      component: StoreSkinAnalysis, path: '/store-service-skin-analysis',
    },
    StoreInbodyScanning: {
      component: StoreInbodyScanning, path: '/store-service-inbody-scanning',
    },
    AboutUs: {
      component: AboutUs, path: '/about-us',
    },
    TechHairTesting: {
      component: TechHairTesting, path: '/tech-hair-testing',
    },
    HolisticSystem: {
      component: HolisticSystem, path: '/holistic-system',
    },
}