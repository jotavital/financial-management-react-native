import { CreateTransaction } from '~/components/CreateTransaction';

interface Props {
    route: any;
}

export const EditTransactionScreen: React.FC = ({ route }: Props) => {
    return <CreateTransaction transaction={route.params} />;
};
