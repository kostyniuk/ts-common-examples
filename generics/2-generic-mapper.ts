export const concatenateFirstNameAndLastName = <TUser extends {firstName: string, lastName: string}>(user: TUser) => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  });

// adds fullName to an object which only contains firstName and lastName

// retains other properties passed in

// fails when the object passed in does not contain firstName"

