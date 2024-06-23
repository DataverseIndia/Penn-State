import { FC, useState } from "react";
import Sidebar from "../../_components/sidebar";
import MembersSheet from "@/components/global/member-sheet";
import { useCreateMember } from "../api/use-create-members";
import { useGetMembers } from "../api/use-get-members";
import MemberCard from "@/components/global/member-card";

type Props = {};

const Members: FC = (props: Props) => {
  const createMemberMutation = useCreateMember();

  const [designation, setDesignation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (designation && name && email && description && imageUrl) {
      const requestData = { designation, name, email, description, imageUrl };
      createMemberMutation.mutate(requestData);
    }
  };

  const MembersQuery = useGetMembers();
  const members = MembersQuery.data || [];
  const isLoading = createMemberMutation.isPending;
  return (
    <div className="flex min-h-[90vh] w-full overflow-hidden pt-20">
      <Sidebar />
      <div className="ml-[200px] w-full">
        <header className="flex lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6 font-relative-medium text-3xl justify-between">
        <h1 className="tracking-tight font-relative-medium">Members</h1>
          <MembersSheet
            designation={designation}
            setDesignation={setDesignation}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            description={description}
            setDescription={setDescription}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </header>
        <div className="flex flex-col py-4">
          {members.map((member, index) => (
            <>
              <MemberCard
                key={index}
                id={member.id}
                designation={member.designation}
                imageUrl={member.imageUrl}
                name={member.name}
                email={member.email}
                description={member.description}
              />
              <hr className="w-[95%] mx-auto border-t-[1px] border-neutral-400 mt-2 mb-5"/>
            </>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Members;
