const AppData = [
  {
    id: '1',
    title:
      'Iranian Hackers Pose as Journalists to Trick Victims Into Installing Malware',
    subtitle:
      'An Iranian cyberespionage group known for targeting government, defense technology, military, and diplomacy ...',
    urlimage:
      'https://thehackernews.com/images/-9bqxt69plWs/X0jc-Y5VinI/AAAAAAAAAtU/Z1WP5r-nvhIMK9F6BMLufPG7M9eEuA-egCLcBGAsYHQ/s728-e100/iran.jpg',
    data: [
      {
        header: 'Header 1',
        content: [
          {
            value:
              'An Iranian cyberespionage group known for targeting government, defense technology, military, and diplomacy sectors is now impersonating journalists to approach targets via LinkedIn and WhatsApp and infect their devices with malware.',
          },
          {
            value:
              'Detailing the new tactics of the "Charming Kitten" APT group, Israeli firm Clearsky said, "starting July 2020, we have identified a new TTP of the group, impersonating \'Deutsche Welle\' and the \'Jewish Journal\' using emails alongside WhatsApp messages as their main platform to approach the target and convince them to open a malicious link."',
          },
          {
            value:
              'This development is the first time the threat actor is said to have carried out a watering hole attack through WhatsApp and LinkedIn, which also includes making phone calls to victims, Clearsky noted in a Thursday analysis.',
          },
          {
            value:
              'After the company alerted Deutsche Welle about the impersonation and the watering hole in their website, the German broadcaster confirmed, "the reporter which Charming Kitten impersonated did not send any emails to the victim nor any other academic researcher in Israel in the past few weeks."',
          },
          {
            value:
              'Charming Kitten (also known by aliases APT35, Parastoo, NewsBeef, and Newscaster) has been previously linked to a series of covert campaigns at least since December 2017 with an aim to steal sensitive information from human rights activists, academic researchers, and media outlets.',
          },
          {
            value:
              'The watering hole — in this case, a malicious link embedded in the compromised Deutsche Welle domain — delivered the info-stealer malware via WhatsApp, but not before the victims were first approached via tried-and-tested social engineering methods with an intention to lure the academics to speak at an online webinar.',
          },
          {
            value:
              '"The correspondence began with an email sent to the target, initiating a conversation," Clearsky explained. "After a short conversation with the target, the Charming Kitten attacker requests to move the conversation to WhatsApp. If the target refuses to move to WhatsApp, the attacker will send a message via a fake LinkedIn profile."',
          },
          {
            value:
              "In one scenario, the adversary even took the step of messaging and calling a victim to gain the target's trust and subsequently walk the person through the steps of connecting to the webinar using the malicious link earlier shared in the chat.",
          },
          {
            value:
              'Although APT35 may have picked up a new ruse, this is not the first time the Iranian hackers have used social media channels to spy on personnel of interest.',
          },
          {
            value:
              'In a three-year-long "Operation Newscaster" uncovered by iSIGHT Partners (now owned by FireEye) in 2014, the threat actor was found to have created false Facebook accounts and a fake news website to spy on military and political leaders in the U.S., Israel, and other countries.',
          },
          {
            value:
              '"In this campaign, we observed a willingness of the attackers to speak on the phone directly with the victim, using WhatsApp calls, and a legitimate German phone number. This TTP is uncommon and jeopardizes the fake identity of the attackers," Clearsky researchers said.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title:
      'QakBot Banking Trojan Returned With New Sneaky Tricks to Steal Your Money',
    subtitle:
      'A notorious banking trojan aimed at stealing bank account credentials and other financial information has now come back with new tricks ...',
    urlimage:
      'https://thehackernews.com/images/-7LQUEMsSaOM/X0d1FKJ8vjI/AAAAAAAA3PU/OH88EqqK0asr0FHUOjLjNZPUQ46xpO1jACLcBGAsYHQ/s728-e100/banking-malware.jpg',
    data: [
      {
        header: 'Header ',
        content: [
          {
            value:
              'A notorious banking trojan aimed at stealing bank account credentials and other financial information has now come back with new tricks up its sleeve to target government, military, and manufacturing sectors in the US and Europe, according to new research.',
          },
          {
            value:
              "In an analysis released by Check Point Research today, the latest wave of Qbot activity appears to have dovetailed with the return of Emotet — another email-based malware behind several botnet-driven spam campaigns and ransomware attacks — last month, with the new sample capable of covertly gathering all email threads from a victim's Outlook client and using them for later malspam campaigns.",
          },
          {
            value:
              "These days Qbot is much more dangerous than it was previously — it has an active malspam campaign which infects organizations, and it manages to use a 'third-party' infection infrastructure like Emotet's to spread the threat even further,\" the cybersecurity firm said.",
          },
          {
            value:
              'First documented in 2008, Qbot (aka QuakBot, QakBot, or Pinkslipbot) has evolved over the years from an information stealer to a "Swiss Army knife" adept in delivering other kinds of malware, including Prolock ransomware, and even remotely connect to a target\'s Windows system to carry out banking transactions from the victim\'s IP address.',
          },
          {
            value:
              'Attackers usually infect victims using phishing techniques to lure victims to websites that use exploits to inject Qbot via a dropper.',
          },
          {
            value:
              'A malspam offensive observed by F5 Labs in June found the malware to be equipped with detection and research-evasion techniques with the goal of evading forensic examination. Then last week, Morphisec unpacked a Qbot sample that came with two new methods designed to bypass Content Disarm and Reconstruction (CDR) and Endpoint Detection and Response (EDR) systems.',
          },
          {
            value:
              'The infection chain detailed by Check Point follows a similar pattern.',
          },
          {
            value:
              'The first step begins with a specially crafted phishing email containing an attached ZIP file or a link to a ZIP file that includes a malicious Visual Basic Script (VBS), which then proceeds to download additional payloads responsible for maintaining a proper communication channel with an attacker-controlled server and executing the commands received.',
          },
          {
            value:
              'Notably, the phishing emails sent to the targeted organizations, which take the form of COVID-19 lures, tax payment reminders, and job recruitments, not only includes the malicious content but is also inserted with archived email threads between the two parties to lend an air of credibility.',
          },
          {
            value:
              "To achieve this, the conversations are gathered beforehand using an email collector module that extracts all email threads from the victim's Outlook client and uploads them to a hardcoded remote server.",
          },
          {
            value:
              'Aside from packing components for grabbing passwords, browser cookies, and injecting JavaScript code on banking websites, the Qbot operators released as many as 15 versions of the malware since the start of the year, with the last known version released on August 7.',
          },
          {
            value:
              "What's more, Qbot comes with an hVNC Plugin that makes it possible to control the victim machine through a remote VNC connection.",
          },
          {
            value:
              '"An external operator can perform bank transactions without the user\'s knowledge, even while he is logged into his computer," Check Point noted. "The module shares a high percentage of code with similar modules like TrickBot\'s hVNC."',
          },
          {
            value:
              "That's not all. Qbot is also equipped with a separate mechanism to recruit the compromised machines into a botnet by making use of a proxy module that allows the infected machine to be used as a control server.",
          },
          {
            value:
              "With Qbot hijacking legitimate email threads to spread the malware, it's essential that users monitor their emails for phishing attacks, even in cases they appear to come from a trusted source.",
          },
          {
            value:
              '"Our research shows how even older forms of malware can be updated with new features to make them a dangerous and persistent threat," Check Point Research\'s Yaniv Balmas said. "The threat actors behind Qbot are investing heavily in its development to enable data theft on a massive scale from organizations and individuals."',
          },
          {
            value:
              '"We have seen active malspam campaigns distributing Qbot directly, as well as the use of third-party infection infrastructures like Emotet\'s to spread the threat even further," Balmas added.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title:
      'Russian Arrested After Offering $1 Million to U.S. Company Employee for Planting Malware',
    subtitle:
      "Hackers always find a way in, even if there's no software vulnerability to exploit.   The FBI has arrested a Russian national who recently traveled to the United States ...",
    urlimage:
      'https://thehackernews.com/images/-3p-tZibT4KU/X0al6TqG1tI/AAAAAAAA3O4/AK8WMfBsMksCWP7FZf_ndhYFlRjr-0HRwCLcBGAsYHQ/s728-e100/malware-attacker.jpg',
    data: [
      {
        header: 'Header 1',
        content: [
          {
            value:
              'An Iranian cyberespionage group known for targeting government, defense technology, military, and diplomacy sectors is now impersonating journalists to approach targets via LinkedIn and WhatsApp and infect their devices with malware.',
          },
          {
            value:
              'Detailing the new tactics of the "Charming Kitten" APT group, Israeli firm Clearsky said, "starting July 2020, we have identified a new TTP of the group, impersonating \'Deutsche Welle\' and the \'Jewish Journal\' using emails alongside WhatsApp messages as their main platform to approach the target and convince them to open a malicious link."',
          },
          {
            value:
              'This development is the first time the threat actor is said to have carried out a watering hole attack through WhatsApp and LinkedIn, which also includes making phone calls to victims, Clearsky noted in a Thursday analysis.',
          },
          {
            value:
              'After the company alerted Deutsche Welle about the impersonation and the watering hole in their website, the German broadcaster confirmed, "the reporter which Charming Kitten impersonated did not send any emails to the victim nor any other academic researcher in Israel in the past few weeks."',
          },
          {
            value:
              'Charming Kitten (also known by aliases APT35, Parastoo, NewsBeef, and Newscaster) has been previously linked to a series of covert campaigns at least since December 2017 with an aim to steal sensitive information from human rights activists, academic researchers, and media outlets.',
          },
          {
            value:
              'The watering hole — in this case, a malicious link embedded in the compromised Deutsche Welle domain — delivered the info-stealer malware via WhatsApp, but not before the victims were first approached via tried-and-tested social engineering methods with an intention to lure the academics to speak at an online webinar.',
          },
          {
            value:
              '"The correspondence began with an email sent to the target, initiating a conversation," Clearsky explained. "After a short conversation with the target, the Charming Kitten attacker requests to move the conversation to WhatsApp. If the target refuses to move to WhatsApp, the attacker will send a message via a fake LinkedIn profile."',
          },
          {
            value:
              "In one scenario, the adversary even took the step of messaging and calling a victim to gain the target's trust and subsequently walk the person through the steps of connecting to the webinar using the malicious link earlier shared in the chat.",
          },
          {
            value:
              'Although APT35 may have picked up a new ruse, this is not the first time the Iranian hackers have used social media channels to spy on personnel of interest.',
          },
          {
            value:
              'In a three-year-long "Operation Newscaster" uncovered by iSIGHT Partners (now owned by FireEye) in 2014, the threat actor was found to have created false Facebook accounts and a fake news website to spy on military and political leaders in the U.S., Israel, and other countries.',
          },
          {
            value:
              '"In this campaign, we observed a willingness of the attackers to speak on the phone directly with the victim, using WhatsApp calls, and a legitimate German phone number. This TTP is uncommon and jeopardizes the fake identity of the attackers," Clearsky researchers said.',
          },
        ],
      },
    ],
  },
];

export default AppData;
