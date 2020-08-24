export default function(initialState: ILoginResponse) {
  const { token, role } = initialState;
  return {
    canReadAdmin: false,
    canUpdateAdmin: role === 'admin',
  };
}
