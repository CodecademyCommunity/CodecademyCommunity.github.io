import data from '../data/staff.json';

data = JSON.parse(data)

export const Staff = () => {
    return (
       <main class="has-text-centered">
           <h1 class="is-size-1 pagetitle mt-6">Codecademy Community Server Staff</h1>
           <p class="is-size-4 mb-3">Meet our server staff!</p>
           <section class="container has-background-white mb-6 p-3">
               <h2 class="is-size-2">Admins</h2>
               <p>Admins are the heads of our staff and the people who manage how the group is run.</p>
               <div class="staff-list">
                  
               </div>
           </section>
           <section class="container has-background-white mb-6 p-3">
               <h2 class="is-size-2">Moderators</h2>
               <p>Moderators comprise our main staff team and aim to keep the peace and happiness in our community.</p>
               <div class="staff-list">
                   <div class="staff-card has-background-white">
                       <img class="profile-picture" src="https://cdn.discordapp.com/avatars/711997187290300546/ecbbc94c78be2f35022c169e8aa6f567.webp?size=80" />
                       <p class="name mod">8-Bit</p>
                   </div>

               </div>
           </section>
           <section class="container has-background-white mb-6 p-3">
               <h2 class="is-size-2">Code Counselors</h2>
               <p>Code Counselors are members of the community who have been recognised as being the most active, friendly and helpful.</p>
               <div class="staff-list">
                
               </div>
           </section>
       </main>
          
    );
}
