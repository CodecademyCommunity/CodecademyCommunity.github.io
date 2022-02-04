import data from '../data/staff.json';
import blankPfp from '../assets/img/discord-blank2.png';
import { StaffCard } from '../Components/StaffCard';

export const Staff = () => {
    return (
       <main className="has-text-centered">
           <h1 className="is-size-1 pagetitle">Codecademy Community Server Staff</h1>
           <p className="is-size-4 mb-3">Meet our server staff!</p>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Admins</h2>
               <p>Admins are the heads of our staff and the people who manage how the group is run.</p>
               <div className="staff-list">
                   {
                         data["superadmins"].map((user) => {
                            return <StaffCard 
                                    key={user["name"]}
                                    name={user["name"]}
                                    pfp={user["pfp"]}
                                    role="super-admin"
                                    />
                         })
                    }{
                        data["admins"].map((user) => {
                            return <StaffCard 
                                    key={user["name"]}
                                    name={user["name"]}
                                    pfp={user["pfp"]}
                                    role="admin"
                                    />
                        })
                    }
               </div>
           </section>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Moderators</h2>
               <p>Moderators comprise our main staff team and aim to keep the peace and happiness in our community.</p>
               <div className="staff-list">
                    {
                        data["mods"].map((user) => {
                            return <StaffCard 
                                    key={user["name"]}
                                    naSme={user["name"]}
                                    pfp={user["pfp"]}
                                    role="mod"
                                    />
                        })
                    }
                    {/* tgrtim must be accounted for seperatly due to having blank pfp and discord weirdness with URLS
                     */}
                    <StaffCard key="tgrtim" name="tgrtim" pfp={blankPfp} role="mod"/>

               </div>
           </section>
           <section className="container has-background-white mb-6 p-3">
               <h2 className="is-size-2">Code Counselors</h2>
               <p>Code Counselors are members of the community who have been recognised as being the most active, friendly and helpful.</p>
               <div className="staff-list">
                    {
                        data["cocos"].map((user) => {
                            return <StaffCard 
                                    key={user["name"]}
                                    name={user["name"]}
                                    pfp={user["pfp"]}
                                    role="coco"
                                    />  
                        })
                    }
               </div>
           </section>
       </main>
          
    );
}
