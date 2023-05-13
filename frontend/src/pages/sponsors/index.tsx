import { GetStaticProps } from "next";
import { Sponsor } from "@/interfaces/front";
import Link from "next/link";

type ProfilesPageProps = {
  profiles: Sponsor[];
};

const ProfileSummary: React.FC<{ profile: Sponsor }> = ({ profile }) => {
  return (
    <Link href={`/sponsors/${profile.id}`} passHref>
      <div key={profile.id} className="flex items-center mb-4">
        <img
          src={profile.logoUrl}
          className="w-12 h-12 object-cover rounded-full mr-4"
        />
        <div>
          <span className="text-xl font-bold">{profile.name}</span>
          <p className="text-gray-500">{profile.bio}</p>
        </div>
      </div>
    </Link>
  );
};

const ProfilesPage: React.FC<ProfilesPageProps> = ({ profiles }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Sponsors Profiles</h1>
      {profiles.map((profile) => (
        <ProfileSummary key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<ProfilesPageProps> = async () => {
  const res = await fetch("http://localhost:3000/api/sponsors");
  const profiles = await res.json();

  return {
    props: { profiles },
  };
};

export default ProfilesPage;
