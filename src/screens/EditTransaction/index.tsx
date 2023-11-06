import { CreateTransaction } from '~/components/CreateTransaction';

interface Props {
    route: any;
    navigation: any;
}

export const EditTransactionScreen: React.FC = ({
    route,
    navigation,
}: Props) => {
    // TODO transformar o form em componente
    return <CreateTransaction transaction={route.params} />;
};
