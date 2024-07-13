import TestimonialAvatar from '@/public/testimonialAvatar.webp';
import { HorizontalPaddingContainer } from './reusables/HorizontalPaddingContainer';
import Img from './reusables/Img';

const Testimonials = () => {
  return (
    <article className="bg-lime py-20">
      <HorizontalPaddingContainer className="space-y-8">
        <p className="text-center text-3xl font-extrabold">
          What Our <span className="text-accent">Clients</span> Say
        </p>

        <p className="mx-auto max-w-screen-sm text-center text-mutedtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </HorizontalPaddingContainer>
    </article>
  );
};

const TestimonialCard = () => {
  return (
    <div className="space-y-5 rounded-md border border-gray-200 bg-white p-8">
      <p className="leading-loose text-mutedtext">
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
        voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
        obcaecati corrupti aspernatur a.”.
      </p>

      <div className="flex items-center gap-3">
        <Img
          className="size-16"
          imgSrc={TestimonialAvatar}
          imgClass="rounded-full border-2 border-accent"
          alt="Nikhil Thapa"
        />
        <div>
          <p className="font-extrabold text-accent">Nikhil Thapa</p>
          <p className="text-sm text-green-800">Found of ABC Tech</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
