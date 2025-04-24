//will write stories for our components so that we can make specific component open source 
import { RevenueCard } from "../../components/RevenueCard";

const meta = {
    components: RevenueCard
};
export default meta;
//we can decide for different conditions our UI will appear differently 
export const BigAmount = {
    args: {
        orderCount: "124",
        title: "Asd",
        amount: "1000000000"
    }
};

export const SmallAmount = {
    args: {
        orderCount: "124",
        title: "Asd",
        amount: "100"
    }
}