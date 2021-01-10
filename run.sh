rm -rf build
mkdir build
rm -rf public/views
mkdir -b public/views
cd build
emcmake cmake ..
make