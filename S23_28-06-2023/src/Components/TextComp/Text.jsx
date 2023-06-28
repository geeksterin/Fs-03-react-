import { useEffect } from "react";

function Text(props) {
  useEffect(() => {
    document.title = "Text Component";
    localStorage.setItem("city", "Delhiii");
    return () => {
      // Any operation or action you want to implement before you unmount your
      //component like
      //deleting some data
      //removing some connection
      //releasing some Resources

      localStorage.removeItem("city"); //time
    };
  });

  return (
    <div>
      <h2>Text Component </h2>
      {/* {console.log("JSX code Got Executed")} */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At et quae
        veritatis, consequuntur praesentium ab! Tempora rem animi veritatis
        voluptatem, illo esse autem nam aliquid alias earum dignissimos numquam,
        cumque molestiae, blanditiis nobis. Earum nostrum cum esse officia
        architecto culpa iure voluptates harum consequuntur quisquam iste
        corrupti, modi consequatur, nesciunt, at repellendus quia! Ex placeat
        doloribus tempora nobis accusantium optio quibusdam exercitationem
        aliquam cupiditate magni quasi consequatur voluptate fugiat obcaecati,
        blanditiis inventore, dolorem, perspiciatis aut? Ducimus corrupti itaque
        recusandae fuga soluta blanditiis magnam atque iure rerum praesentium.
        Ipsam minus ratione illum excepturi molestias rerum repellendus! Omnis
        culpa laborum veniam totam dolorem molestias nesciunt cupiditate nihil
        aut quam! Quia ex, illum delectus eius quos pariatur laudantium vitae a
        necessitatibus suscipit, quisquam quod alias officiis, dolor corporis
        voluptate cupiditate maxime quibusdam consequatur facilis consequuntur
        ducimus ipsam? Quis magnam earum neque sequi, itaque perferendis et,
        beatae nulla dolorum atque natus officia minima expedita alias impedit
        hic illo debitis, mollitia facilis tempore. Commodi neque illo qui,
        nobis maiores cumque ratione voluptatum repellendus consequuntur atque,
        dolor architecto autem placeat voluptate perspiciatis impedit eius rerum
        corporis, excepturi blanditiis dolorum assumenda amet? Necessitatibus,
        placeat facilis. Omnis a libero inventore laborum dolorem voluptates
        fuga nobis commodi suscipit dolor at magni nisi, excepturi sed delectus
        dolore modi est culpa doloribus nostrum? Reprehenderit cupiditate
        veritatis placeat mollitia blanditiis? Aperiam voluptatibus beatae
        labore reiciendis tempora quis maxime consectetur. Veritatis sunt
        temporibus eligendi amet, nobis architecto doloribus numquam recusandae
        nulla blanditiis sit nostrum molestiae saepe magnam soluta est suscipit
        nemo natus dignissimos. Vitae quam maiores corporis vero quis explicabo
        quos officiis assumenda sint voluptate temporibus ipsa iusto eum sit
        doloremque reiciendis veritatis, aut voluptas reprehenderit perspiciatis
        recusandae illo expedita. Et necessitatibus tempore, quidem dolorum
        cupiditate iste. Earum atque quam fugit nobis dolores voluptatibus
        perspiciatis, dolorem eos, molestias, vitae inventore? At, ratione
        dolores.
      </p>
    </div>
  );
}

export default Text;
