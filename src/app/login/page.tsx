import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
export default function Login() {
  
  return (
         <div className=" flex-col pb-20 content-center font-arvo justify-items-center bg-primary ">

                     <figure className="w-full ">
          <Wave4 className="w-full   fill-quaternary h-60" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                <div className="w-full h-screen flex flex-col items-center justify-center ">
                    <div className="flex w-full max-w-sm  flex-col gap-6">
                        
                        <Tabs defaultValue="account">
                            <TabsList className="bg-quaternary " >
                            <TabsTrigger value="account" className=" data-[state=active]:bg-primary data-[state=inactive]:text-primary data-[state=active]:font-bold  " >Account</TabsTrigger>
                            <TabsTrigger value="password" className="data-[state=active]:bg-primary data-[state=inactive]:text-primary data-[state=active]:font-bold ">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                            <Card className="text-primary bg-quaternary">
                                <CardHeader>
                                <CardTitle>SignUp</CardTitle>
                                <CardDescription className="text-surface font-bold">
                                    Join the Pack. Stay Raw
                                    
                                </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                     <FieldSet>
                                        <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="username">Username</FieldLabel>
                                            
                                            <FieldDescription className="text-surface/70">
                                                Choose a unique username for your account.
                                            </FieldDescription>
                                            <Input className="focus:border-2 focus-within:border-primary" id="username" type="text" placeholder="Max Leiter" />
                                            <FieldError></FieldError>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="password">Password</FieldLabel>
                                            <FieldDescription className="text-surface/70">
                                            Must be at least 8 characters long.
                                            </FieldDescription>
                                            <Input className="focus:border-2 focus-within:border-primary" id="password" type="password" placeholder="••••••••" />

                                            <FieldError></FieldError>
                                        </Field>
                                          <Field>
                                            <FieldLabel htmlFor="password">Re-Type Password</FieldLabel>
                                            <FieldDescription className="text-surface/70">
                                                Retype your password.
                                            </FieldDescription>
                                            <Input className="focus:border-2 focus-within:border-primary" id="password" type="password" placeholder="••••••••" />
                                            <FieldError  ></FieldError>
                                        </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                </CardContent>
                               <CardFooter className="flex flex-col justify-center gap-3">
                                <Button className="bg-primary text-quaternary font-bold  w-full">SignUp</Button>
                                <Button className="bg-primary/40 text-primary font-bold w-full">Cancel</Button>
                                </CardFooter>
                            </Card>
                            </TabsContent>
                            <TabsContent value="password">
                             <Card className="text-primary bg-quaternary">
                                <CardHeader>
                                <CardTitle>LogIn</CardTitle>
                                <CardDescription className="text-surface font-bold">
                                    Welcome back, Dawg.
                                    
                                </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                     <FieldSet>
                                        <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="username">Username</FieldLabel>
                                            
                                            <FieldDescription className="text-surface/70">
                                                The username you use to SignUp.
                                            </FieldDescription>
                                            <Input className="focus:border-2 focus-within:border-primary" id="username" type="text" placeholder="Max Leiter" />
                                            <FieldError></FieldError>
                                        </Field>
                                        <Field>
                                            <FieldLabel htmlFor="password">Password</FieldLabel>
                                            <FieldDescription className="text-surface/70">
                                            Must be at least 8 characters long.
                                            </FieldDescription>
                                            <Input className="focus:border-2 focus-within:border-primary" id="password" type="password" placeholder="••••••••" />

                                            <FieldError  ></FieldError>
                                        </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                </CardContent>
                                <CardFooter className="flex flex-col justify-center gap-3">
                                <Button className="bg-primary text-secondary font-bold  w-full">LogIn</Button>
                                <Button className="bg-primary/40 text-primary font-bold w-full">Cancel</Button>
                                </CardFooter>
                            </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            
        </div>
  )
}


