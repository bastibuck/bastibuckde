import React from "react";
import Image from "next/image";
import { Card, Text, Group, Button } from "@mantine/core";

import { Project } from "../queries/projects";

import GitHub from "./icons/GitHub";

const ProjectCard: React.FC<{
  project: Project;
}> = ({ project: { title, description, image, href } }) => {
  return (
    <Card shadow="md" padding="md" withBorder>
      <Card.Section mb="sm">
        <div
          style={{
            width: "100%",
            height: 240,
            position: "relative",
          }}
        >
          <Image
            src={image.imageUrl}
            blurDataURL={image.blurredUrl}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </Card.Section>

      <Text weight={500} mb="xs">
        {title}
      </Text>

      <Text size="sm" sx={{ color: "dimmed", lineHeight: 1.5 }} mb="sm">
        {description}
      </Text>

      {href !== null ? (
        <Group position="right">
          <Button
            component="a"
            href={href}
            target="_blank"
            leftIcon={<GitHub />}
          >
            Code
          </Button>
        </Group>
      ) : null}
    </Card>
  );
};

export default ProjectCard;
