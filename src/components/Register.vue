<script setup>
import { IconCaretDown , IconArrowUpRight } from '@tabler/icons-vue';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar  } from '@/components/ui/scroll-area'
import { ref, onMounted, onUnmounted } from 'vue';
import { Smoothie } from "vue-smoothie";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IconEyeQuestion, IconArrowLeft,IconEye   } from '@tabler/icons-vue';
import { Input } from './ui/input';
import { Checkbox } from '@/components/ui/checkbox'
import { canRegister, canLogin } from './state';

const terms = ref(false)
const input_ps_type = ref('password');

function togglePassword(){
    input_ps_type.value = input_ps_type.value === 'password' ? 'text' : 'password';
}
function unLogin(){
  if(terms.value){
    toggleterms(false);
    document.getElementById("smoothi").style.overflowY = "hidden";
  }else{
    canRegister.value = !canRegister.value;
  }
  if(canRegister.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll";
    }
}
function login(){
    canLogin.value = !canLogin.value;
    canRegister.value = !canRegister.value;
    if(canLogin.value){
        document.getElementById("smoothi").style.overflowY = "hidden";
    }else{
        document.getElementById("smoothi").style.overflowY = "scroll";
    }
}
function toggleterms(open = true){
    if (open) {
        terms.value = true;
        const sec1 = document.getElementById('sec1');
        sec1.classList.add("w-full");
        document.getElementById("smoothi").style.overflowY = "hidden";
    } else {
        terms.value = false;
        const sec1 = document.getElementById('sec1');
        sec1.classList.remove("w-full");
        sec1.classList.add("w-1/2");
        document.getElementById("smoothi").style.overflowY = "hidden";
    }
}
</script>

<template>
  <div class=" p-10 w-screen h-screen bg-[#ffffff] flex flex-col justify-center mt-0 backdrop-blur-3xl absolute z-20" v-show="canRegister">
    <div class="login w-full h-full bg-gray-100 rounded-2xl flex p-3 gap-3 shadow-2xl">
        <div id="sec1" class="sec1 w-1/2 gradient-background rounded-2xl p-20 flex flex-col pt-10 pb-10" style="transition: 0.7s ease-in-out">
            <Button variant="primary" size="icon" @click="unLogin">
                <IconArrowLeft stroke={2} color="white"/>
            </Button>
            <h1 class="mt-5 text-white flex place-items-center text-[50px] font-[800]" style="font-family:'Onest'; line-height: 50px;">Welcome To Habesha live</h1>
            <h3 class="text-white mt-3" style="font-family: 'Onest', sans-serif;">welcome back to your habesha live account sign back in and continue your joureny</h3>
            <Card v-show="!terms" class="w-48 h-16 mt-2 bg-[#ffffff6b] backdrop-blur-3xl border-none flex place-items-center justify-center cursor-pointer hover:scale-[0.95] transition-all">
                <CardContent class="flex place-items-center justify-start p-2 gap-3 ">
                        <IconEyeQuestion stroke={2} color="white" class="w-14 h-14"/>
                    <h1 class="flex place-items-center text-sm text-white" style="font-family: 'Onest', sans-serif;">Want to see where your data goes</h1>
                </CardContent>
            </Card>
            <ScrollArea class="w-full h-1/2 mt-5" v-show="terms">
              <p class="text-white" style="font-family: 'Onest'">
                <strong>Terms of Use:</strong><br><br>
                
                <strong>1. Eligibility</strong><br><br>
                <strong>In Short</strong><br>
                You must be of legal age according to your country’s law to use this website. But wherever you may live, you must be at least 18 years old.<br><br>
                
                You must be at least eighteen (18) years of age to use the Website, unless the age of majority in your jurisdiction is greater than eighteen (18) years of age, in which case you must be at least the age of majority in your jurisdiction. Use of the Website is not permitted where prohibited by law.<br><br>
                
                <strong>2. Intellectual Property</strong><br><br>
                <strong>In Short</strong><br>
                Users and Models own everything they post on our website. We don’t own their content. But we own our text, graphical images, photographs, music, video, software, scripts, and trademarks, service marks, and logos that we’ve created. Please don’t change, copy, reproduce, or translate them unless we allow you to do so in writing.<br><br>
                
                The Content on the Website, excluding User Submissions and Third Party Content (defined below), but including other text, graphical images, photographs, music, video, software, scripts, and trademarks, service marks, and logos contained therein (collectively “Proprietary Materials”), are owned by and/or licensed to us. All Proprietary Materials are subject to copyright, trademark, and/or other rights under the laws of applicable jurisdictions, including domestic laws, foreign laws, and international conventions. We reserve all our rights over our Proprietary Materials.<br><br>
                
                Except as otherwise explicitly permitted, you agree not to copy, modify, publish, transmit, distribute, participate in the transfer or sale of, create derivative works of, or in any other way exploit, in whole or in part, any Content.<br><br>
                
                <strong>3. User Identity Verification</strong><br><br>
                <strong>In Short</strong><br>
                All users must have their identity verified if they want to upload any content to our website. For verification, we need two things:<br>
                - Your ID with your photo on it<br>
                - A photo of you holding your ID next to your face<br><br>
                
                This verification is mandatory for all Users who wish to upload any content (other than an Avatar or a Background Photo) on the Website. We, at our sole discretion, may request from a User to verify their identity at any time and for any reason we reasonably believe it is necessary. Any content attempted to be uploaded by a non-verified User will not be published on the Website until the verification process is completed. Once the User completes the account verification procedure, the content will be moderated by our moderation team, and if it complies with the relevant rules and regulations, it will be published on the User’s account automatically. Users can start the account verification procedure either through their profile or by attempting to upload any content on the Website. Users must provide a clear copy of a valid government-issued identification document with a photo and a selfie holding the identification document. Failure to comply with a verification request, providing false or misleading information during the verification process, or attempting to circumvent our verification review systems may lead to a permanent block of the User’s account and access to the Website.<br><br>
                
                <strong>4. User Submissions</strong><br><br>
                <strong>In Short</strong><br>
                You own everything you post on our website, and only you are responsible for it. However, we can reproduce, distribute, adapt, and modify your content, among other things. Other users, including models, can view your content and save it. Learn more about restrictions and prohibitions in the full (legally binding) version of the Terms and Conditions.<br><br>
                
                You are entirely responsible for any and all materials you stream, upload, submit, or otherwise make available via the Website, including videos or any other communications or profile information (collectively, “User Submissions”). For the purpose of these Terms, any reference to User Submissions includes any submissions/content made available via the Website from models. User Submissions cannot always be withdrawn. You acknowledge that any disclosure of personal information in User Submissions may make you personally identifiable and that we do not guarantee any confidentiality with respect to User Submissions.<br><br>
                
                You shall be solely responsible for any and all of your own User Submissions and any and all consequences of posting, uploading, publishing, or otherwise making them available. For any of your User Submissions, you affirm, represent, and/or warrant that:<br>
                1. You own or have the necessary licenses, permissions, rights, or consents to use and authorize us to use all trademarks, copyrights, trade secrets, or other proprietary rights in and to User Submissions for any and all uses contemplated by the Website and these Terms;<br>
                2. You will not post, or allow anyone else to post, any material that depicts any individual under the age of eighteen (18) years and that you have inspected and are maintaining written documentation, pursuant to United States law 18 U.S.C. § 2257, which we voluntarily comply with (whether you are subject to United States law or not) and other analogous, relevant, and/or applicable laws, to confirm that all individuals in your User Submission are, in fact, over the age of eighteen (18) years; and<br>
                3. You have written consent, release, and/or permission from each and every identifiable individual in the User Submission to use the name and/or likeness of each and every such identifiable individual to enable the use of the User Submission for any and all uses contemplated by the Website and these Terms.<br><br>
                
                You further agree that you shall not submit material that:<br>
                1. Is copyrighted, protected by trade secret or trademark laws, or otherwise subject to third-party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have explicit permission from the rightful owner to submit the material and to grant us all of the license rights granted herein;<br>
                2. Is obscene, vulgar, illegal, unlawful, defamatory, fraudulent, libelous, harmful, harassing, abusive, threatening, invasive of privacy or publicity rights, hateful, racially or ethnically offensive, inflammatory, or otherwise inappropriate as decided by us in our sole discretion;<br>
                3. Depicts illegal activities, promotes or depicts physical harm or injury against any group or individual, or promotes or depicts any act of cruelty to animals;<br>
                4. Impersonates any person or entity or otherwise misrepresents you in any way, including creating a false identity;<br>
                5. Would constitute, encourage or provide instructions for a criminal offense, a violation of the rights of any party, or that would otherwise create liability or violate any local, state, national or international law; or<br>
                6. Is unsolicited or unauthorized advertising, promotion, “spam” or any other form of solicitation.<br><br>
                
                We claim no ownership or control over User Submissions or Third Party Content. You or a third-party licensor, as appropriate, retain all copyrights to User Submissions, and you are responsible for protecting those rights as appropriate. You irrevocably grant us a worldwide, non-exclusive, royalty-free, perpetual, non-cancelable, sublicensable license to reproduce, publicly perform, publicly display, distribute, adapt, modify, publish, translate, create derivative works of, and otherwise exploit User Submissions for any purpose, including without limitation any purpose contemplated by the Website and these Terms. Furthermore, you also grant other users of the Website a right and license to display, stream, and download User Submissions in connection with their use of the Website and for other personal use. You also irrevocably waive and cause to be waived against us and any of our users any claims and assertions of moral rights or attribution with respect to User Submissions.<br><br>
                
                You represent and warrant that you have all the rights, power, and authority necessary to grant the rights granted herein to User Submissions. Specifically, you represent and warrant that you own the title to the User Submissions, that you have the right to upload the User Submissions to the Website, and that uploading the User Submissions will not infringe upon any other party’s rights or your contractual obligations to other parties.<br><br>
                
                You acknowledge that we may at our sole discretion refuse to publish, remove, or block access to any User Submission for any reason, or for no reason at all, with or without notice.<br><br>
                
                Without limiting the other indemnification provisions herein, you agree to defend us against any claim, demand, suit, or proceeding made or brought against us by a third party alleging that your User Submissions or your use of the Website in violation of these Terms infringes or misappropriates the intellectual property rights of any third party or violates applicable law and you shall indemnify us for any and all damages against us and for reasonable attorney’s fees and other costs incurred by us in connection with any such claim, demand, suit, or proceeding.<br><br>
                
                <strong>5. Content on the Website</strong><br><br>
                <strong>In Short</strong><br>
                We are not responsible for any third-party content on our website, like links or ads, or anything posted by users. If you use anything provided by these third parties, it is fully your responsibility.<br><br>
                
                You understand and acknowledge that, when using the Website, you will be exposed to content from a variety of sources including content made available on the Website by other users and through automated or other means (collectively, “Third Party Content”) and that we do not control and are not responsible for any Third Party Content. You understand and acknowledge that you may be exposed to content that is inaccurate, offensive, indecent, or otherwise objectionable, or may cause harm to your computer systems, and, without limiting the other release provisions herein, you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against us with respect thereto.<br><br>
                
                We do not claim any ownership rights over Third Party Content. By using the Website, you understand and agree that we do not control and are not responsible for any Third Party Content and that we are not responsible for the accuracy, usefulness, or intellectual property rights of or relating to any Third Party Content. You further understand and acknowledge that you may be exposed to Third Party Content that is inaccurate, offensive, indecent, or otherwise objectionable, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against us with respect thereto.<br><br>
                
                You acknowledge that we may at our sole discretion refuse to publish, remove, or block access to any Third Party Content for any reason, or for no reason at all, with or without notice.<br><br>
                
                <strong>6. Account Termination Policy</strong><br><br>
                <strong>In Short</strong><br>
                We can block or terminate your account if we feel it is necessary. If you want to terminate your account, you can do it by logging into your account settings.<br><br>
                
                We may terminate a user’s access to the Website if, under appropriate circumstances, the user is determined to have violated these Terms or any other policies applicable to the Website. We may also at our sole discretion, limit access to the Website, and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement. We reserve the right to decide whether User Submissions or any other content violates these Terms for reasons other than copyright infringement, such as, but not limited to, pornography, obscenity, or excessive length. We may at any time, without prior notice and at our sole discretion, remove such content and/or terminate a user’s account for submitting such material in violation of these Terms.<br><br>
                
                If you wish to terminate your account, you may do so by logging into your account and following the instructions on the Website. Upon any termination, discontinuation, or cancellation of your account, the following provisions of these Terms will survive: Intellectual Property, User Identity Verification, User Submissions, Content on the Website, and Account Termination Policy.<br><br>
                </p>
            </ScrollArea>
            <div class="more mt-auto flex w-full [&>*]:cursor-pointer">
                <h1 class="text-white underline"  @click="toggleterms(true)" style="font-family: 'Onest', sans-serif;">Terms of use</h1>
                <h1 class="text-white ml-auto" style="font-family: 'Onest', sans-serif;">Privacy Policy</h1>
            </div>
        </div>
        <div class="sec2 w-1/2 h-full flex-col p-20 py-5 gap-6">
            <h1 class="text-[50px] font-[600]" style="font-family: 'Onest', sans-serif;">Register</h1>
            <Label>First and Last name</Label>
            <div class="flex gap-2 mt-1">
                <Input placeholder="First Name" class="w-full h-12"/>
                <Input placeholder="Last Name" class="w-full h-12"/>
            </div>
            <Label>Phone Number</Label>
            <Input placeholder="phone" class="w-full h-12"/>
            <Label>Password</Label>
            <div class="pass flex gap-1">
                <Input placeholder="Password" :type="input_ps_type" class="w-full h-12">
                    
                </Input>
                <Button variant="outline" size="icon" class="h-12 w-16" @click="togglePassword">
                    <IconEye stroke={2} color="gray" class="w-8 h-8"/>
                </Button>
            </div>
            <Input placeholder="Cofirm Password" :type="input_ps_type" class="w-full h-12 mt-2"></Input>
            <div class="flex items-center space-x-2 mt-8">
                <Checkbox id="terms" />
                <label
                  for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            <Button class="w-full h-12 gradient-background text-lg text-white mt-3 hover:text-white hover:shadow-xl transition-all" variant="outline">Register</Button>
            <h1 class="w-full text-center mt-3" style="font-family: 'Roboto';">Already Have An Account <Span @click="login" class="text-[#e22abf] cursor-pointer">Login</Span></h1>
        </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(214deg,#e22abf,#6e00eb);
  background-size: 120% 120%;
  animation: gradient-animation 6s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>