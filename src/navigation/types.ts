export type RootStackParamList = {
  Main: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  AppointmentsTab: undefined;
  ProfileTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type AppointmentsStackParamList = {
  Appointments: undefined;
  AppointmentDetail: { id: string };
};

export type ProfileStackParamList = {
  Profile: undefined;
};
