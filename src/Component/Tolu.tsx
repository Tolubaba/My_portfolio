import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Set initial position
    gsap.set(element, { x: -100 });

    // Create the GSAP animation
    gsap.to(element, {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
    });
  }, []);

  return <div ref={elementRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae harum quae, laboriosam pariatur aspernatur placeat magnam consequatur earum dolorem aut doloribus mollitia odio illo hic accusantium architecto? Quod, assumenda optio voluptates accusamus possimus architecto quidem sint error aut, magni eligendi incidunt? Reprehenderit perferendis vero error quia minus magni, enim veritatis, sint debitis quos facilis maxime similique non unde aut eveniet porro molestiae, expedita dolorum dolores commodi sed provident neque? Maxime at placeat id fuga quisquam repudiandae provident distinctio explicabo. Beatae incidunt assumenda voluptatum doloribus eum, minima illo? Eum sapiente quam harum ex deleniti eligendi fuga, asperiores qui a dolorum natus aut iure! Officiis ex reiciendis voluptates ut reprehenderit in eius deleniti. Dolorem dolore maiores quisquam inventore dolorum consequuntur voluptas qui asperiores fuga? Suscipit esse incidunt, distinctio rem odio labore quaerat ab perferendis ad illum natus, tenetur nulla ea ipsam, iure cum officiis modi perspiciatis asperiores quia illo earum. Reprehenderit sit est, nulla eveniet nesciunt repellat perferendis dolorum fugiat, in veniam commodi animi beatae rem officia excepturi debitis nam nemo! Odit eos excepturi fugit. Autem odit nulla accusamus! Ab laboriosam at molestiae sequi porro quisquam veniam mollitia dolorum eveniet. Dicta similique quisquam accusantium omnis assumenda fugiat repellendus esse ipsa officia exercitationem perferendis ullam quasi dolorum tempore, culpa ratione earum eius eligendi voluptatum magnam expedita rem delectus iure placeat? Quisquam expedita iusto fugit laborum reiciendis nihil deleniti, aperiam reprehenderit nemo alias molestias eveniet rem saepe iure minus numquam facilis voluptate sequi porro? Pariatur voluptas commodi ipsum blanditiis, dolores aliquam mollitia hic unde corrupti sed. Enim accusamus vitae hic a impedit consectetur iusto ratione labore in dolores id velit, omnis eligendi quod soluta! Provident molestias qui et! Pariatur beatae blanditiis aspernatur, dolor ullam dolorum molestiae sapiente nemo sequi soluta eaque molestias impedit eum labore sint consequuntur quisquam animi! Enim odit corporis cumque fuga!</div>;
};

export default MyComponent;
