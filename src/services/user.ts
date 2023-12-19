import api from '~/services/api';
import { UpdateUserData, UserProps } from '~/types/user';

export const updateUser = async (data: UpdateUserData) => {
    return api.put<UserProps>(`users`, data);
};
