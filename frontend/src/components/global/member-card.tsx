import { useDeleteMember } from '@/app/(admin)/members/api/use-delete-members';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Link } from 'react-router-dom';

type Props = {
    id: number;
    designation: string;
    imageUrl: string;
    name: string;
    email: string;
    description: string;
};

const MemberCard = ({ id, designation, imageUrl, name, email, description }: Props) => {
    const deleteMutation = useDeleteMember(id.toString());
    const deleteMember = () => {
        deleteMutation.mutate();
    };
    return (
        <div className="flex shadow-none p-4 mx-5">
            <Image src={imageUrl} alt={name} className="h-full min-w-[20rem] object-cover rounded-md shadow-none" />
            <div className="flex flex-col gap-3 p-4">
                <div className="flex justify-between">
                    <div>
                        <div className="flex gap-2 text-balance text-2xl font-roboto-serif font-medium text-[#1E407C] tracking-tight">
                              <h1>{name}</h1>
                              <p className="text-base font-relative-medium text-neutral-700 mt-auto">
                                 ({designation})
                              </p>
                        </div>
                        <Link to={`mailto:${email}`}>{email}</Link>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]" onClick={() => deleteMember()}>
                           Delete
                        </Button>
                        <Button size="sm" className="text-neutral-800 hover:text-neutral-950 bg-white hover:bg-neutral-100 animation rounded-md shadow-[inset_-12px_-8px_40px_#46464620]">
                           Edit
                        </Button>
                    </div>
                </div>
                <p className="text-neutral-900 text-justify tracking-tight">{description}</p>
            </div>
        </div>
    );
};

export default MemberCard;
