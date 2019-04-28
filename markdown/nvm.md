# nvm

- https://github.com/creationix/nvm

## Windows

chocolatey:

~~~ps1
PS C:\windows\system32> Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

Getting latest version of the Chocolatey package for download.
Getting Chocolatey from https://chocolatey.org/api/v2/package/chocolatey/0.10.13.

Downloading 7-Zip commandline tool prior to extraction.
Extracting C:\Users\hdknr\AppData\Local\Temp\chocolatey\chocInstall\chocolatey.zip to C:\Users\hdknr\AppData\Local\Temp\chocolatey\chocInstall...

Installing chocolatey on this machine
Creating ChocolateyInstall as an environment variable (targeting 'Machine')
  Setting ChocolateyInstall to 'C:\ProgramData\chocolatey'

WARNING: It's very likely you will need to close and reopen your shell before you can use choco.
Restricting write permissions to Administrators We are setting up the Chocolatey package repository.

The packages themselves go to 'C:\ProgramData\chocolatey\lib' (i.e. C:\ProgramData\chocolatey\lib\yourPackageName).
A shim file for the command line goes to 'C:\ProgramData\chocolatey\bin' and points to an executable in 'C:\ProgramData\chocolatey\lib\yourPackageName'.

Creating Chocolatey folders if they do not already exist.

WARNING: You can safely ignore errors related to missing log files when upgrading from a version of Chocolatey less than 0.9.9.
  'Batch file could not be found' is also safe to ignore.
  'The system cannot find the file specified' - also safe.
chocolatey.nupkg file not installed in lib.
 Attempting to locate it from bootstrapper.

PATH environment variable does not have C:\ProgramData\chocolatey\bin in it. Adding...

警告: Not setting tab completion: Profile file does not exist at 'C:\Users\hdknr\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1'.

Chocolatey (choco.exe) is now ready.
You can call choco from anywhere, command line or powershell by typing choco.
Run choco /? for a list of functions.
You may need to shut down and restart powershell and/or consoles
 first prior to using choco.
Ensuring chocolatey commands are on the path
Ensuring chocolatey.nupkg is in the lib folder
~~~

nvm:

~~~ps1
C:\windows\system32>choco install nvm

Chocolatey v0.10.13
2 validations performed. 1 success(es), 1 warning(s), and 0 error(s).

Validation Warnings:
 - A pending system reboot request has been detected, however, this is being ignored due to the current Chocolatey configuration.  
   If you want to halt when this occurs, then either set the global feature using:

     choco feature enable -name=exitOnRebootDetected

   or pass the option --exit-when-reboot-detected.

Installing the following packages:
nvm

By installing you accept licenses for the packages.
Progress: Downloading nvm.portable 1.1.7... 100%
Progress: Downloading nvm 1.1.5... 100%

nvm.portable v1.1.7 [Approved]
nvm.portable package files install completed. Performing other installation steps.
The package nvm.portable wants to run 'chocolateyinstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[N]o/[P]rint): yes

Downloading nvm
  from 'https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-noinstall.zip'
Progress: 100% - Completed download of C:\Users\hdknr\AppData\Local\Temp\chocolatey\nvm.portable\1.1.7\nvm-noinstall.zip (2.3 MB).
Download of nvm-noinstall.zip (2.3 MB) completed.
Hashes match.
Extracting C:\Users\hdknr\AppData\Local\Temp\chocolatey\nvm.portable\1.1.7\nvm-noinstall.zip to C:\ProgramData\nvm...
C:\ProgramData\nvm
PATH environment variable does not have %NVM_HOME% in it. Adding...
PATH environment variable does not have %NVM_SYMLINK% in it. Adding...
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The install of nvm.portable was successful.
  Software installed to 'C:\ProgramData\nvm'

nvm v1.1.5 [Approved]
nvm package files install completed. Performing other installation steps.
 The install of nvm was successful.
  Software install location not explicitly set, could be in package or
  default install location if installer.

Chocolatey installed 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
~~~

一覧

~~~ps1
PS C:\windows\system32> nvm list available

|   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
|--------------|--------------|--------------|--------------|
|   11.12.0    |   10.15.3    |   0.12.18    |   0.11.16    |
|   11.11.0    |   10.15.2    |   0.12.17    |   0.11.15    |
|   11.10.1    |   10.15.1    |   0.12.16    |   0.11.14    |
|   11.10.0    |   10.15.0    |   0.12.15    |   0.11.13    |
|    11.9.0    |   10.14.2    |   0.12.14    |   0.11.12    |
|    11.8.0    |   10.14.1    |   0.12.13    |   0.11.11    |
|    11.7.0    |   10.14.0    |   0.12.12    |   0.11.10    |
|    11.6.0    |   10.13.0    |   0.12.11    |    0.11.9    |
|    11.5.0    |    8.15.1    |   0.12.10    |    0.11.8    |
|    11.4.0    |    8.15.0    |    0.12.9    |    0.11.7    |
|    11.3.0    |    8.14.1    |    0.12.8    |    0.11.6    |
|    11.2.0    |    8.14.0    |    0.12.7    |    0.11.5    |
|    11.1.0    |    8.13.0    |    0.12.6    |    0.11.4    |
|    11.0.0    |    8.12.0    |    0.12.5    |    0.11.3    |
|   10.12.0    |    8.11.4    |    0.12.4    |    0.11.2    |
|   10.11.0    |    8.11.3    |    0.12.3    |    0.11.1    |
|   10.10.0    |    8.11.2    |    0.12.2    |    0.11.0    |
|    10.9.0    |    8.11.1    |    0.12.1    |    0.9.12    |
|    10.8.0    |    8.11.0    |    0.12.0    |    0.9.11    |
|    10.7.0    |    8.10.0    |   0.10.48    |    0.9.10    |

This is a partial list. For a complete list, visit https://nodejs.org/download/release
~~~

node 11.6.0 インストール

~~~ps1
PS C:\windows\system32> nvm install 11.6.0
Downloading node.js version 11.6.0 (64-bit)...
Complete
Creating C:\ProgramData\nvm\temp

Downloading npm version 6.5.0-next.0... Complete
Installing npm v6.5.0-next.0...

Installation complete. If you want to use this version, type

nvm use 11.6.0
~~~

有効化:

~~~ps
PS C:\windows\system32> nvm use 11.6.0
Now using node v11.6.0 (64-bit)
~~~
