import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Input } from "../../components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProject } from "../../Redux/Project/Action";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../components/ui/dialog";
import CreateProjectForm from "../navbar/CreateProjectForm";

export const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
];

function ProjectList() {
  const [keyword, setKeyword] = useState("");
  const { project } = useSelector(store => store);
  const dispatch = useDispatch();

  const handleFilterTags = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}));
    } else {
      dispatch(fetchProjects({ tag: value }));
    }
  };
  const handleFilterCategory = (value) => {
    if (value == "all") {
      dispatch(fetchProjects({}));
    } else {
      dispatch(fetchProjects({ category: value }));
    }
  };

  useEffect(() => {
    dispatch(fetchProjects({}));
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProject(e.target.value));
  };
  return (
    <div className="relative px-5 lg:flex gap-5 justify-center py-5">
      <section className="filter sction">
        <Card className="p-5 sticky top-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between lg:w-[20rem]">
                Filtros
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="mt-5">
                  <ScrollArea className="space-y-7 h-[70vh]">
                    <div>
                      <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                      <div className="pt-5">
                        <RadioGroup
                          className=" space-y-2 pt-5"
                          defaultValue="all"
                          onValueChange={(value) => handleFilterCategory(value)}
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="all" id="r1" />
                            <Label htmlFor="r1">All</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="fullstack" id="r2" />
                            <Label htmlFor="r2">FullStack</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="frontend" id="r3" />
                            <Label htmlFor="r3">Frontend</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="backend" id="r4" />
                            <Label htmlFor="4">Backend</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="pt-9">
                      <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                      <div className="pt-5">
                        <RadioGroup
                          className=" space-y-2 pt-5"
                          defaultValue="all"
                          onValueChange={(value) => handleFilterTags(value)}
                        >
                          {tags.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <RadioGroupItem value={item} id={`r1-${item}`} />
                              <Label htmlFor={`r1-${item}`}>{item}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="flex justify-between lg:w-[20rem]">
                Ações
              </AccordionTrigger>
              <AccordionContent>
                <Dialog>
                  <DialogTrigger className="flex items-center gap-1 hover:bg-muted p-2 w-full hover:font-semibold">
                    <PlusIcon  className="h-3 w-3 text-primary"/>
                    <p className=" text-muted-foreground">Novo projeto</p>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>Criar novo Projeto</DialogHeader>
                    <CreateProjectForm />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>

      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Input
              onChange={handleSearchChange}
              placeholder="Pesquisar projeto"
              className="40% px-9"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>
        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? project.searchProjects.map((item, index) => (
                  <ProjectCard key={item.id * index} item={item} />
                ))
              : project.projects.map((item) => (
                  <ProjectCard key={item.id} item={item} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList;
