import Image from 'next/image';

import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {/* <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button> */}
      <div className="flex justify-between mt-20">
        <a href="https://linkedin.com/in/juraj-pusic" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/color/2x/linkedin.png"}
            alt={"linkedin"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
        <a href="https://twitter.com/juracija" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/color/2x/twitter.png"}
            alt={"twitter"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
        <a href="mailto:jurapusic056@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/fluency/2x/gmail-new.png"}
            alt={"gmail"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
        <a href="https://t.me/jurapusic056/" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/color/2x/telegram-app.png"}
            alt={"gmail"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
        <a href="https://join.skype.com/invite/Cwkygw8rMRwL" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/color/2x/skype.png"}
            alt={"skype"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
        <a href="https://discord.gg/M7VTBHJb" target="_blank" rel="noopener noreferrer">
          <Image
            src={"https://img.icons8.com/color/2x/discord.png"}
            alt={"discord"}
            width={50}
            height={50}
            className="rounded shadow-xl"
          />
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;
