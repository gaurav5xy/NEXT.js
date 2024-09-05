"use client";
import React, { KeyboardEvent, useCallback, useRef, useState } from "react";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import * as z from "zod";

const type: any = "create";
// Define your schema with Zod
const QuestionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  explanation: z.string().min(20, "Explanation must be at least 20 characters"),
  tags: z.array(z.string().max(15, "Tag must be less than 15 characters")),
});

type QuestionFormData = z.infer<typeof QuestionSchema>;

const Question: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuestionFormData>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  const onSubmit = async (values: QuestionFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting values: ", values);
    } catch (error) {
      console.error("Failed to submit form: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      field: ControllerRenderProps<QuestionFormData, "tags">
    ) => {
      if (e.key === "Enter" && field.name === "tags") {
        e.preventDefault();

        const tagInput = e.target as HTMLInputElement;
        const tagValue = tagInput.value
          .trim()
          .replace(/\s+/g, "")
          .toUpperCase();

        console.log("Current Tags:", field.value);
        console.log("New Tag Input:", tagValue);
        console.log("Includes check:", field.value.includes(tagValue));

        if (tagValue !== "") {
          if (tagValue.length > 15) {
            return form.setError("tags", {
              type: "required",
              message: "Tag must be less than 15 characters.",
            });
          }

          if (!field.value.includes(tagValue as never)) {
            form.setValue("tags", [...field.value, tagValue]);
            tagInput.value = "";
            form.clearErrors("tags");
          }
        } else {
          form.trigger();
        }
      }
    },
    [form]
  );

  const handleTagRemove = useCallback(
    (tag: string, field: ControllerRenderProps<QuestionFormData, "tags">) => {
      const newTags = field.value.filter((t) => t !== tag);
      form.setValue("tags", newTags);
    },
    [form]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Question Title <span>*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular" {...field} />
              </FormControl>
              <FormDescription>
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Explanation Field */}
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel>
                Detailed Explanation <span>*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                    ],
                    toolbar:
                      "undo redo | codesample | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist",
                    content_style: "body { font-family:Inter; font-size:16px }",
                    skin: "oxide",
                    content_css: "light",
                  }}
                />
              </FormControl>
              <FormDescription>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Tags Field */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>
                Tags <span>*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag) => (
                        <Badge key={tag}>
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="Close icon"
                            width={12}
                            height={12}
                            onClick={() => handleTagRemove(tag, field)}
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription>
                Add up to 3 tags to describe what your question is about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className=" primary-gradient w-fit !text-light-900"
        >
          {isSubmitting ? (
            <>{type === "edit" ? "Editing..." : "Posting..."}</>
          ) : (
            <>{type === "edit" ? "Edit Question" : "Ask a Question"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default Question;
