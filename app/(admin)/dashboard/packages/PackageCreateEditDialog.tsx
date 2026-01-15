"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const featureOptions = [
  { label: "Historical", value: "HISTORICAL" },
  { label: "Nature", value: "NATURE" },
  { label: "Family", value: "FAMILY" },
  { label: "Entertainment", value: "ENTERTAINMENT" },
  { label: "Other", value: "OTHER" },
];

const countryOptions = [
  { label: "Malaysia", value: "Malaysia" },
  { label: "Thailand", value: "Thailand" },
  { label: "Indonesia", value: "Indonesia" },
];

const packageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.enum(["Malaysia", "Thailand", "Indonesia"]),
  loc: z.string(),
  title: z.string(),
  subtitle: z.string(),
  mode: z.string(),
  season: z.string(),
  type: z.string(),
  meal: z.string(),
  appearance: z.string(),
  route: z.string(),
  places_image: z.string(),
  features: z.array(z.string()).optional(),
});

type PackageFormData = z.infer<typeof packageSchema>;

type PackageCreateEditDialogProps = {
  isCreateDialogOpen?: boolean;
  initialData?: PackageFormData;
  onSubmit: (data: PackageFormData) => void;
  setIsCreateDialogOpen: (open: boolean) => void;
};

export const PackageCreateEditDialog: React.FC<
  PackageCreateEditDialogProps
> = ({ initialData, onSubmit, setIsCreateDialogOpen, isCreateDialogOpen }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(
    initialData?.features || []
  );

  const form = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
    defaultValues: initialData || {
      name: "",
      country: "Malaysia",
      loc: "",
      title: "",
      subtitle: "",
      mode: "",
      season: "",
      type: "",
      meal: "",
      appearance: "",
      route: "",
      places_image:
        "https://www.tourismperakmalaysia.com/wp-content/uploads/2023/06/Istana-Kenangan-Kuala-Kangsar-1200x675.jpg",
      features: [],
    },
  });

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setSelectedFeatures((prev) =>
      checked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
    form.setValue(
      "features",
      checked
        ? [...selectedFeatures, feature]
        : selectedFeatures.filter((f) => f !== feature)
    );
  };

  const submitHandler = (data: PackageFormData) => {
    data.features = selectedFeatures;
    onSubmit(data);
    setIsCreateDialogOpen(false);
  };

  return (
    <Dialog
      open={isCreateDialogOpen}
      onOpenChange={() => setIsCreateDialogOpen(false)}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            <div>Create Package</div>
          </DialogTitle>
          <div>
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(submitHandler)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="border rounded px-2 py-1 w-full"
                        >
                          {countryOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="loc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subtitle</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mode</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="season"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Season</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meal</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="appearance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Appearance</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="route"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Route</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="places_image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Places Image URL</FormLabel>
                      <FormControl>
                        <Input {...field} disabled />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <FormLabel>Features</FormLabel>
                  <div className="flex gap-4 flex-wrap mt-2">
                    {featureOptions.map((feature) => (
                      <label
                        key={feature.value}
                        className="flex items-center gap-2"
                      >
                        <Checkbox
                          checked={selectedFeatures.includes(feature.value)}
                          onCheckedChange={(checked) =>
                            handleFeatureChange(feature.value, !!checked)
                          }
                        />
                        {feature.label}
                      </label>
                    ))}
                  </div>
                </div>
                <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PackageCreateEditDialog;
