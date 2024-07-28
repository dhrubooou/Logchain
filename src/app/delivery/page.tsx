import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const page = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Delivery Status" />
    </DefaultLayout>
  );
};

export default page;
